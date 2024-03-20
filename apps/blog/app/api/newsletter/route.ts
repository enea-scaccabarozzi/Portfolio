import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

const handler = NewsletterAPI({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  provider: siteMetadata.newsletter!.provider,
})

export { handler as GET, handler as POST }
