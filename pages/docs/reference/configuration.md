# Configuration reference

## Environment variables

### Required

| Name                 | Description                                                      |
|----------------------|------------------------------------------------------------------|
| `POSTGRES_PASSWORD`  | Password for the `postgres` user                                 |
| `JWT_SECRET`         | Secret used to sign JWT tokens                                   |
| `ANON_KEY`           | Secret used to sign anonymous tokens                             |
| `SERVICE_ROLE_KEY`   | Secret used to sign service role tokens                          |
| `EXTERNAL_URL`       | URL of the Webhood instance used by end users to access the site |

### Optional
| Name                 | Description                                                 | Default |
|----------------------|-------------------------------------------------------------|---------|
| `WEBHOOD_HTTP_PORT`  | Port to listen on insecurely. Use this only for evaluation. | `8000`  |
| `WEBHOOD_HTTPS_PORT` | Port to listen on TLS                                       | `8443`  |
| `WEBHOOD_TLS_CERT`   | Path to TLS certificate                                     |         |
| `WEBHOOD_TLS_KEY`    | Path to TLS key                                             |         |
| `POSTGRES_HOST`      | Hostname of the PostgreSQL server                            | `db`    |
| `POSTGRES_PORT`      | Port of the PostgreSQL server                               | `5432`  |
| `POSTGRES_DB`        | Name of the PostgreSQL database                             | `postgres` |
| `HTTP_PROXY`         | URL of the HTTP proxy to use for outgoing connections in `scanner` container      |         |
| `HTTPS_PROXY`        | URL of the HTTPS proxy to use for outgoing connections in `scanner` container      |         |
| `NO_PROXY`           | Comma-separated list of hosts to not use the proxy for in `scanner` container     |         |

