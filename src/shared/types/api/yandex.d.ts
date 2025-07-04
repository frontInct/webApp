export {} // чтобы файл считался модулем

declare global {
  interface Window {
    YaAuthSuggest: {
      init: (
        params: {
          client_id: string
          response_type: string
          redirect_uri: string
        },
        origin: string,
        button: {
          view: string,
          parentId: string,
          buttonSize: string,
          buttonView: string,
          buttonTheme: string,
          buttonBorderRadius: string,
          buttonIcon: string,
        }
      ) => Promise<{
        handler: () => Promise<{
          access_token: string
          expires_in: number
          token_type: string
        }>
      }>
    }
  }
}
