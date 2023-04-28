import { SelectedPage } from '../../Types/types';
import './styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({page, selectedPage, setSelectedPage}: Props) => {
  const LowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;
  
  return (
    <AnchorLink
        href={`#${LowerCasePage}`}
        onClick={() => setSelectedPage(LowerCasePage)}
        className={`${selectedPage === LowerCasePage ? "nav-links-active" : "nav-links"}`}
    >
        {page}
    </AnchorLink>
  )
}

export default Links