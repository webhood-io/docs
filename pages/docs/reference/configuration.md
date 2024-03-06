# Configuration reference

## Environment variables

### Required

| Name                 | Description                                                                                                             |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| `EXTERNAL_URL`       | URL of the Webhood instance used by end users to access the site.                                                       |
| `SCANNER_TOKEN`       | Secret key used by the `scanner` container to authenticate to the backend.                                                       |

### Optional
| Name                 | Description                                                                                                                                                                                                                                                                                                           | Default    |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| `SELF_REGISTER`      | Allow users to signup themselves instead of requiring administrators to create new user accounts manually. Exposes a `Register` tab in the login page. New accounts are created with `authenticated` role. To promote users to another role, administrators need to change the role manually in user management page. | `false`    |
| `SCANNER_NO_PRIVATE_IPS`      | Prevent scanner from scanning URLs that resolve to private IP addressess. Enabling this setting causes the scanner to also not scan any URLs that cannot be resolved from DNS. This security feature helps with network isolation but does not replace the need for it (see [security considerations](/docs/security#recommended)).  | `false`    |
| `SCANNER_LOG_LEVEL`      | Logging level of the scanner. Possible values are `fatal` \| `error` \| `warn` \| `info` \| `debug` \| `trace`.  | `info`    |
| `WEBHOOD_HTTP_PORT`  | Port to listen on insecurely. Use this only for evaluation.                                                                                                                                                                                                                                                           | `8000`     |
| `WEBHOOD_HTTPS_PORT` | Port to listen on TLS                                                                                                                                                                                                                                                                                                 | `8443`     |
| `WEBHOOD_TLS_CERT`   | Path to TLS certificate                                                                                                                                                                                                                                                                                               |            |
| `WEBHOOD_TLS_KEY`    | Path to TLS key                                                                                                                                                                                                                                                                                                       |            |
| `HTTP_PROXY`         | URL of the HTTP proxy to use for outgoing connections in `scanner` container                                                                                                                                                                                                                                          |            |
| `HTTPS_PROXY`        | URL of the HTTPS proxy to use for outgoing connections in `scanner` container                                                                                                                                                                                                                                         |            |
| `NO_PROXY`           | Comma-separated list of hosts to not use the proxy for in `scanner` container                                                                                                                                                                                                                                         |            |

