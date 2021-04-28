import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'hooks/types';
import translations from 'utils/translations';
import { Language } from 'types/languages';

const AsyncImport = (path: string) => lazy(() => import(`containers/${path}`));

const AppNavigation: React.FC<unknown> = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  const languages = useStoreState((state) => state.languages.items);
  const currentLanguage = useStoreState(
    (state) => state.languages.currentLanguage,
  );

  const selectLanguage = useStoreActions(
    (actions) => actions.languages.selectLanguage,
  );

  const onSelectLanguage = useCallback(
    (language: Language) => {
      selectLanguage(language);
      translations.setLanguage(language.code);
    },
    [selectLanguage],
  );

  const beforeAppStart = useCallback(() => {
    // Initialize the default language to be used across the app
    if (!currentLanguage.code) {
      // Select the default language based on the device
      const deviceLanguageCode = translations.getInterfaceLanguage();

      const defaultlanguage = languages.find((language) =>
        deviceLanguageCode.includes(language.code),
      );

      onSelectLanguage(defaultlanguage || languages[0]);
    } else {
      onSelectLanguage(currentLanguage);
    }

    setIsReady(true);
  }, [currentLanguage, languages, onSelectLanguage]);

  useEffect(() => {
    if (!isReady) {
      beforeAppStart();
    }
  }, [isReady, beforeAppStart]);

  if (!isReady) {
    return null;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={AsyncImport('ProductList')} />
          <Route path="/product" component={AsyncImport('Product')} />
          <Route path="/basket" component={AsyncImport('Basket')} />
          <Route component={AsyncImport('NotFound')} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppNavigation;
