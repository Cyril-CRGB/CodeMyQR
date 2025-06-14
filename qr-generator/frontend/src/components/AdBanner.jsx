import { Helmet } from 'react-helmet';

function AdBanner() {
  return (
    <>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        {/* …other ad config… */}
      </Helmet>
      <ins className="adsbygoogle" /* …attributes… */></ins>
    </>
  );
}