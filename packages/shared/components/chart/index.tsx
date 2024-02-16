import * as React from 'react'
import { useRef, useState, useEffect, useMemo } from 'react'
import { ChartProps } from './types'

/**
 * Chart component for user interaction
 */
export const Chart = (props: ChartProps) => {
  const { symbol = 'AUDJPY.m', showHeader = 1, showToolbar = 1 } = props
  const uriChart = process.env.URI_CHART || 'http://localhost:2099/chart'
  const refIframe = useRef<any>(null)
  const [iframeSrc, setIframeSrc] = useState<string>(uriChart)
  const [windowContent, setWindowContent] = useState<any>({ height: '100vh', width: '100vw' })

  const updateIframeSrc = () => {
    setIframeSrc(`${uriChart}?symbol=${symbol}&showheader=${showHeader}&showtoolbar=${showToolbar}`)
  }

  useEffect(() => {
    if (window?.innerHeight && window?.innerWidth) {
      setWindowContent({ height: window?.innerHeight, width: window?.innerWidth })
    }
  }, [global?.window])

  useEffect(() => {
    updateIframeSrc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uriChart, symbol, showHeader, showToolbar])

  const renderChart = useMemo(
    () => (
      <iframe
        title={'Trading Chart'}
        id="chart-web"
        src={iframeSrc}
        height={windowContent?.height || 100}
        width={windowContent?.width || 100}
        frameBorder={0}
        scrolling="no"
        allowFullScreen={true}
        ref={refIframe}></iframe>
    ),
    [iframeSrc, refIframe, windowContent],
  )

  return renderChart
}
