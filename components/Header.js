import Link from 'next/link'
import Head from 'next/head';

const style = {
}

const Header = (props) => (
	<div>
		<Head>
			<title>{props.title || ''}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
		</Head>
		<h1>
			{props.titulo}
		</h1>
	</div>
)

export default Header