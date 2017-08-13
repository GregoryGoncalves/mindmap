import Link from 'next/link'
import Head from 'next/head';

const Meta = (props) => (
	<Head>
		<meta name="description" content="Mindmap software" />
		<meta name="author" content="Selhar" />
		<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
		<meta property="og:description" content="Mindmap software" />
		<meta property="og:title" content={props.title || ''} />
		<meta property="twitter:title" content={props.title || ''}/>
		<meta content='text/html; charset=utf-8' http-equiv='Content-Type' />
		<meta http-equiv='X-UA-Compatible' content='IE=edge' />
		<meta charset="utf-8" />
		<title>{props.titulo || ''}</title>
		<link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" />
		<link rel="icon" href="/static/favicon.png" />
	</Head>
)

export default Meta