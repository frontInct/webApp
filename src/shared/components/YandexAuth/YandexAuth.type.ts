export type YandexAuthType = {
  init: (
    params: {
      client_id: string;
      response_type: string;
      redirect_uri: string;
      scope?: string;
    },
    origin: string,
    button: {
      view: string;
      parentId: string;
      buttonSize: string;
      buttonView: string;
      buttonTheme: string;
      buttonBorderRadius: string;
      buttonIcon: string;
    }
  ) => Promise<{ handler: () => void }>
}
