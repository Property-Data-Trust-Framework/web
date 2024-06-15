import type {StarlightRouteData} from '@astrojs/starlight/utils/route-data.ts'
import {slugToLocaleData, urlToSlug} from '@astrojs/starlight/utils/slugs.ts'
import {stripLeadingAndTrailingSlashes} from '@astrojs/starlight/utils/path.ts'
import {getPrevNextLinks, getSidebar} from '@astrojs/starlight/utils/navigation.ts'
import type {StarlightDocsEntry} from '@astrojs/starlight/utils/routing.ts'
import {useTranslations} from '@astrojs/starlight/utils/translations.ts'
import config from 'virtual:starlight/user-config'
import {getSiteTitle, getSiteTitleHref, getToC} from '@astrojs/starlight/utils/route-data.ts'
import {StarlightPageProps} from '@astrojs/starlight/utils/starlight-page.ts'

export async function generateStarlightPageRouteData({
                                                       props,
                                                       url,
                                                     }: {
  props: StarlightPageProps;
  url: URL;
}): Promise<any> {
  const { isFallback, frontmatter, ...routeProps } = props;
  const slug = urlToSlug(url);

  const id = `${stripLeadingAndTrailingSlashes(slug)}.md`;
  const localeData = slugToLocaleData(slug);


  const routeData = {
    id,
    labels: useTranslations(localeData.locale).all(),
    siteTitle: getSiteTitle(localeData.lang),
    siteTitleHref: getSiteTitleHref(localeData.locale),
    slug,
  };

  return routeData;
}