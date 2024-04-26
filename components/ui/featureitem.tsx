export function FeatureItem({ Logo, title, children }) {
  return (
    <div>
      <p className="font-bold">
        <Logo className="mr-2 inline" />
        {title}
      </p>
      {children}
    </div>
  )
}
