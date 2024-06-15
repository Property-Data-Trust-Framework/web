import * as PrismObject from 'prismjs'
//if you remove this things will break
globalThis.Prism = PrismObject
import { API } from '@stoplight/elements';
import {TryIt, withMosaicProvider, withStyles} from '@stoplight/elements-core';
import useBreakpoint from '../lib/useBreakpoints.ts'
import '../stoplight/stoplight-styles-for-starlight.css';

export function ResponsiveApi({ layout = 'sidebar', currentVersion = 'v1', apiDescriptionUrl = "/api/pdtf-api-1.3.0.yaml" }) {
  const size = useBreakpoint();
  //hacks to hide spinner once loaded
  //astro doesn't seem to have a nicer way to display a spinner / do suspense stuff
  //@ts-ignore
  document.querySelector(".spinner").style.display = "none"


   return (
     <>
      <API
        apiDescriptionUrl={apiDescriptionUrl}//this works because this file is is in our public dir. importing directly is awkward cus this component runs client side only
        router='hash'
        layout={size === 'sm' ? 'stacked' : 'sidebar'}
        className='not-content'
        class=''
      />
     </>
    );
}

const TryItWithProvider = withMosaicProvider(withStyles(TryIt))
export function PdtfTryIt({ layout = 'sidebar', currentVersion = 'v1' }) {
    return  (
      <TryItWithProvider embeddedInMd={true} httpOperation={{
           method: "GET",
          servers: ["https://todos.stoplight.io"],
          path: "/todos",

          responses: [{}]
       }}/>
    );
}

