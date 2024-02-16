import * as React from 'react'
import { useRef, useState, useEffect, useMemo } from 'react'
import { ChartMobileProps } from './types'
import { SafeAreaView, Text, View } from 'react-native'
import WebView from 'react-native-webview'

/**
 * Primary UI component for user interaction
 */
export const ChartMobile = (props: ChartMobileProps) => {
  const { symbol = 'AUDJPY.m', showHeader = 1, showToolbar = 1 } = props
  const uriChart = process.env.URI_CHART || 'http://localhost:2099/chart'
  // const uriChart = process.env.URI_CHART || 'http://localhost:2099/chart' || 'https://chart-app.dev.mifx.com/chart'
  const refIframe = useRef(null)
  const [iframeSrc, setIframeSrc] = useState(uriChart)

  const updateIframeSrc = () => {
    setIframeSrc(`${uriChart}?symbol=${symbol}&showheader=${showHeader}&showtoolbar=${showToolbar}`)
  }

  useEffect(() => {
    updateIframeSrc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uriChart, symbol, showHeader, showToolbar])

  const renderChart = useMemo(
    () => (
      <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{
          uri: 'https://chart-app.dev.mifx.com/chart?symbol=AUDJPY.m&showheader=1&showtoolbar=1',
          headers: {
            token:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHBzOi8vZXJwLWRldi52YWx1dHJhZGVzLmlvIiwiZGF0YSI6eyJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiYXBwbGljYXRpb25fY29kZSI6ImFuZHJvaWQiLCJhcHBsaWNhdGlvbl9kZXZpY2UiOiJtb2JpbGUiLCJ1c2VyX2lkIjoxLCJ1c2VyX3R5cGUiOiJ1c2VyIiwiZnVsbF9uYW1lIjoiRmFqYXIgU3VqaXRvIiwiYWNjZXNzX2lkIjoxfSwiaWF0IjoxNzA2MTY1NzIyLCJleHAiOjE3MDYxNjkzMjIsIm5iZiI6MTcwNjE2NTcyMiwianRpIjoiVkh6cFZER002dG12V3BKYSIsImZhX3BheWxvYWQiOnsiZmFfc3RlcCI6MCwiZmFfc3RhdHVzIjpmYWxzZSwiZmFfdmFsaWQiOnRydWV9fQ.MoW4tN6-sWiV_7-1XnPWfz-_QNYqnYWGFpc6J5lKdccPXDrJljCWs9aKPZtBdr-WlLktMoIX46wqRUEH95_FwK-JXROl2yi0yrBPY-LrTH2s6Yrm2eWDL5HFpy-JX6I6xHaums5VzWzNe9BDKRCHSzQ44WVyg5PTuOwTezoYFtPpPGJtlz_Ii3nPuAcmTtFLlDwtFb_61jwb7J2p6MMY2W_BZlfC_V92Zdfm-Iqjwwff85ROyc8Jbm7WGlM07BQjrZiGBGJDqzUNpwMZksWwDbQK9cHrMLYGzD5xNqQ7IFAa7sVkHW-knhJXbaUQu3H1bwAc3PsTSqWtk0aVcIu0ZcHyRfT_bN1AM38bhmWAhqo9-EmfsEO3XMWSR7BtrWzSPvb5htF6kTOCROknNUOWri0-LzI-7iu_jEZ5oK827Fb0nZiLW2eXAzJVT_MKZLFG5W3O4VzUXl0uaXN1_fQMWl9MAHxlBYkuDA2qXK3ZirmLQb7Ng9r1JwWAd1KaUu_OgAzjkuZutNkJ63GVmmba48JHjp2yX89hfQTB_QKmOShObPjdo4FhFvEqVl1i6jGMsYC9X31GEKluudOy-7GIPhVdznNfnBhZsRd8Nk0VhActBRGYUtA8fLzl5VJqqFkVBjFxEfqRYddGyIPJLgXXRUgcOhPrhDDdLyWLc-g3jXA',
            metaServer: 'MT4DEV',
          },
        }}
        // startInLoadingState={true}
        // renderLoading={() => {
        //   return <Text>Loader</Text>;
        // }}
        // allowFileAccessFromFileURLs={true}
        // domStorageEnabled={true}
        // allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={() => true}
      />
    </SafeAreaView>
    ),
    [iframeSrc, refIframe],
  )

  return renderChart
}
