import React from 'react';
import { render } from '@testing-library/react-native';
import RootNavigation from '../../navigation/TabNavigator';

// PUBLIC_INTERFACE
export function renderTabNavigator(): void {
  /**
   * This helper renders the RootNavigation for smoke testing.
   * Note: Full test execution may require jest-expo and @testing-library/react-native setup, which
   * is not included in the current project scope. This file serves as a placeholder to indicate
   * intended coverage for navigation rendering.
   */
  render(<RootNavigation />);
}

// Placeholder test (skipped) to avoid failing CI until test runner is configured.
describe('TabNavigator', () => {
  it.skip('renders without crashing', () => {
    renderTabNavigator();
  });
});
