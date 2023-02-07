import * as React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	React.useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
