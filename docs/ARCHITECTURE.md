# Architecture notes

The core package is intentionally dependency-light: block data is deterministic, mining is explicit, and validation is pure enough to test independently. The browser and API folders are presentation shells around that model.
