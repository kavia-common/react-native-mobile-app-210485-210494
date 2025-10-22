# Traceability Matrix — mobile_frontend

## Introduction
This matrix maps requirements (REQ IDs) from the PRD to the planned implementation modules and the associated test coverage. It ensures end-to-end traceability for GxP compliance.

## Matrix

- REQ-001: Navigation Shell (Tab-Based)
  - Implementation:
    - src/app/navigation/ (tab navigator)
    - src/app/screens/ (HomeScreen.tsx, ActivityScreen.tsx, SettingsScreen.tsx)
  - Tests:
    - tests/integration/navigation.spec.tsx (tab switching, screen render)
    - tests/unit/components/tabbar.spec.tsx (if a custom tab bar is implemented)

- REQ-002: Theming — Ocean Professional
  - Implementation:
    - src/theme/tokens.ts
    - src/theme/ThemeProvider.tsx
    - usage across src/app/components/
  - Tests:
    - tests/unit/theme/theme.tokens.spec.ts (token presence, structure)
    - tests/unit/theme/theme.provider.spec.tsx (provider renders children and injects theme)

- REQ-003: Local State Management
  - Implementation:
    - src/state/AppContext.tsx
    - src/state/reducers/appReducer.ts
    - src/state/selectors/appSelectors.ts
  - Tests:
    - tests/unit/state/appReducer.spec.ts
    - tests/unit/state/appSelectors.spec.ts

- REQ-004: Audit Trail Scaffolding
  - Implementation:
    - src/gxp/audit.ts (audit logger interface and in-memory logger)
    - src/gxp/logger.ts (structured logger)
  - Tests:
    - tests/unit/gxp/audit.spec.ts (event structure, timestamp, action)
    - tests/unit/gxp/logger.spec.ts (level filtering, message format)

- REQ-005: Validation Controls
  - Implementation:
    - src/gxp/validation.ts (validators)
  - Tests:
    - tests/unit/gxp/validation.spec.ts (valid/invalid cases)

- REQ-006: Error Handling
  - Implementation:
    - src/gxp/errorBoundary.tsx (error boundary and handler)
  - Tests:
    - tests/integration/errorBoundary.spec.tsx (fallback UI, retry behavior)
    - tests/unit/gxp/error.utils.spec.ts (formatting/sanitization if utilities added)

- REQ-007: Logging and Diagnostics
  - Implementation:
    - src/gxp/logger.ts
  - Tests:
    - tests/unit/gxp/logger.spec.ts (levels and structure)

- REQ-008: Settings Screen
  - Implementation:
    - src/app/screens/SettingsScreen.tsx
    - integration with src/state/AppContext.tsx
  - Tests:
    - tests/integration/settings.spec.tsx (preference change reflects in UI and audit)
    - tests/unit/state/appReducer.spec.ts (preference actions)

## Notes
- As no backend is present, audit events are stored in-memory or output to console. Future updates may integrate secure storage or remote persistence.
- The matrix will be updated as new requirements are added or implementation details evolve.
