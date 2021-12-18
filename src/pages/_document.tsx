import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <script src='https://developers.kakao.com/sdk/js/kakao.js'></script>
                    <script>
                        Kakao.init('869ceaaec4649ed9a6da41413eac0695')
                        console.log(Kakao.isInitialized())
                    </script>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
