declare namespace FooterModuleCssNamespace {
  export interface IFooterModuleCss {
    account: string;
    footer: string;
    logo: string;
  }
}

declare const FooterModuleCssModule: FooterModuleCssNamespace.IFooterModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModuleCssNamespace.IFooterModuleCss;
};

export = FooterModuleCssModule;
