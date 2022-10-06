import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
  usePrismicDocumentByID,
} from '@prismicio/react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  // get all posts
  const [documents] = useAllPrismicDocumentsByType('post');

  // get post by id
  const [document, {}] = usePrismicDocumentByID('Yz7RUhEAACQAiK5v');

  console.log(documents);

  return (
    <div>
      {document && <PrismicRichText field={document.data.title} />}
      {document && <PrismicRichText field={document.data.content} />}
      Hello
    </div>
  );
};

export default App;
