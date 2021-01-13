import { KeycloakService }from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
          try {
            await keycloak.init({
                config: {
                    url: 'http://localhost:8080/auth',
                    realm: 'Testing',
                    clientId: 'raj-ui-app'
                },
              loadUserProfileAtStartUp: true,
              initOptions: {
                 checkLoginIframe:true,
                checkLoginIframeInterval:25
              },
              bearerExcludedUrls: []
            });
            resolve();
          } catch (error) {
            reject(error);
          }
        });
      };
}
/*
,
"credentials": {
    "secret": "your-client-secret"
  }
*/
