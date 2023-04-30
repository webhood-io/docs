# Configuration reference

## Environment variables

### Required

| Name                 | Description                                                                                                             |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| `POSTGRES_PASSWORD`  | Password for the `postgres` user. This password is used to secure internal connections to the database.                 |
| `JWT_SECRET`         | Secret used to sign JWT tokens. JWT tokens are main authentication method for all internal services and external users. |
| `ANON_KEY`           | JWT token used in place of actual authentication token when users are not yet signed in.                                |
| `SERVICE_ROLE_KEY`   | A JWT token with admin access used internally.                                                                          |
| `EXTERNAL_URL`       | URL of the Webhood instance used by end users to access the site.                                                       |

### Optional
| Name                 | Description                                                                                                                                                                                                                                                                                                           | Default    |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| `WEBHOOD_HTTP_PORT`  | Port to listen on insecurely. Use this only for evaluation.                                                                                                                                                                                                                                                           | `8000`     |
| `WEBHOOD_HTTPS_PORT` | Port to listen on TLS                                                                                                                                                                                                                                                                                                 | `8443`     |
| `WEBHOOD_TLS_CERT`   | Path to TLS certificate                                                                                                                                                                                                                                                                                               |            |
| `WEBHOOD_TLS_KEY`    | Path to TLS key                                                                                                                                                                                                                                                                                                       |            |
| `POSTGRES_HOST`      | Hostname of the PostgreSQL server                                                                                                                                                                                                                                                                                     | `db`       |
| `POSTGRES_PORT`      | Port of the PostgreSQL server                                                                                                                                                                                                                                                                                         | `5432`     |
| `POSTGRES_DB`        | Name of the PostgreSQL database                                                                                                                                                                                                                                                                                       | `postgres` |
| `HTTP_PROXY`         | URL of the HTTP proxy to use for outgoing connections in `scanner` container                                                                                                                                                                                                                                          |            |
| `HTTPS_PROXY`        | URL of the HTTPS proxy to use for outgoing connections in `scanner` container                                                                                                                                                                                                                                         |            |
| `NO_PROXY`           | Comma-separated list of hosts to not use the proxy for in `scanner` container                                                                                                                                                                                                                                         |            |
| `SELF_REGISTER`      | Allow users to signup themselves instead of requiring administrators to create new user accounts manually. Exposes a `Register` tab in the login page. New accounts are created with `authenticated` role. To promote users to another role, administrators need to change the role manually in user management page. | `false`    |

