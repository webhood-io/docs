"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type GetStatusResponse = {
  status: "OK" | "ERROR"
  data: object[]
}

const StatusCircle = ({ status }: { status: "OK" | "ERROR" }) => {
  return (
    <div
      className={`h-4 w-4 rounded-full ${
        status === "OK" ? "bg-green-500" : "bg-red-500"
      }`}
    ></div>
  )
}

export default function ServiceStatus() {
  const [status, setStatus] = useState<GetStatusResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetch("https://status.webhood.io/api/status")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setStatus(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Link href="https://status.webhood.io" target="_blank">
        <div className="flex flex-row items-center gap-1 hover:underline">
          <StatusCircle status={status?.status} />
          {status?.status === "OK" ? (
            <p>All services are up and running</p>
          ) : (
            <p>Services are currently having an issue</p>
          )}
        </div>
      </Link>
    </div>
  )
}
