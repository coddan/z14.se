import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-gray-400 hover:text-gray-500 dark:hover:text-gray-500">
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
