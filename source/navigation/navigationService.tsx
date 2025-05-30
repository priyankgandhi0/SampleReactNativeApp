// Navigations
import type { NavigationContainerRef } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

const navigate = (name: string, params?: object): void => {
  if (navigationRef?.current) {
    navigationRef?.current?.navigate(name, {
      params,
    });
  }
};

const push = (name: string, params?: object): void => {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  }
};

function goBack(): void {
  if (navigationRef?.current && navigationRef?.current.canGoBack()) {
    navigationRef?.current?.goBack();
  }
}

const popToTop = (): void => navigationRef?.current?.dispatch(StackActions.popToTop());

const reset = (name: string, params?: object): void => {
  if (navigationRef.current) {
    navigationRef?.current?.reset({
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    });
  }
};

const navigateReset = (routeArray: any): void => {
  if (navigationRef.current) {
    navigationRef?.current?.reset({
      index: 0,
      routes: [...routeArray],
    });
  }
};

const replace = (name: string, params?: object): void => {
  if (navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

export { goBack, navigate, navigateReset, popToTop, push, replace, reset };
