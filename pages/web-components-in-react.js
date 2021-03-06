import Head from 'next/head'
import Counter from '../components/counter'
import WebComponentLoader from '../components/webComponentLoader'
import Example from '../components/example'
import PeskyPopup from '../components/peskyPopup'

export default function WCInReact() {
  const pageTitle = 'Web komponenter i React'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>{pageTitle}</h1>
      <p>La oss sjå på nokre web komponenter.</p>
      <Example title="React teller">
        <Counter />
      </Example>
      <Example title="Web komponent teller">
        <chill-counter />
      </Example>
      <Example title="Web komponent teller V2">
        <WebComponentLoader load={['chill-counter-v2']}>
          <chill-counter-v2 />
        </WebComponentLoader>
      </Example>
      <Example title="Nøstede komponenter">
        <WebComponentLoader load={['fancy-border']}>
          <fancy-border color="green" party="false">
            <span>Her er noe JSX tekst inni fancy-border.</span>
          </fancy-border>
          <p>Men kva skjer om me freister å style innholdet inni?</p>
        </WebComponentLoader>
        {/* <style jsx global>
          {`
            .fancy-border {
              padding: 12px;
              border: 5px solid blueviolet;
            }
          `}
        </style>
        <div className="fancy-border">just a test</div> */}
      </Example>
      <Example title="Pop-ups og skygge-dom">
        <PeskyPopup msg="Hjelpes! Eit sprett-opp-vindauge." />
      </Example>
    </>
  )
}
