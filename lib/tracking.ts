"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    va?: (command: string, payload?: Record<string, unknown>) => void
  }
}

type EventPayload = Record<string, string | number | boolean | null | undefined>

const STORAGE_KEY = "rentaflow_attribution_v1"
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const

type AttributionRecord = Record<string, string>

function readStoredAttribution(): AttributionRecord {
  if (typeof window === "undefined") return {}
  const raw = window.sessionStorage.getItem(STORAGE_KEY)
  if (!raw) return {}
  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== "object") return {}
    return Object.entries(parsed).reduce<AttributionRecord>((acc, [key, value]) => {
      if (typeof value === "string" && value.length > 0) acc[key] = value
      return acc
    }, {})
  } catch {
    return {}
  }
}

function writeStoredAttribution(value: AttributionRecord) {
  if (typeof window === "undefined") return
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}

function getCurrentAttribution(): AttributionRecord {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)
  const stored = readStoredAttribution()
  const nextValue: AttributionRecord = { ...stored }

  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) nextValue[key] = value
  }

  const referrerParam = params.get("referrer")
  if (referrerParam) nextValue.referrer = referrerParam

  if (!nextValue.referrer && document.referrer) {
    nextValue.referrer = document.referrer
  }

  if (!nextValue.landing_path) {
    nextValue.landing_path = window.location.pathname
  }

  writeStoredAttribution(nextValue)
  return nextValue
}

export function useTrackedHref(baseHref: string) {
  const [href, setHref] = useState(baseHref)

  useEffect(() => {
    setHref(buildTrackedHref(baseHref))
  }, [baseHref])

  return href
}

export function buildTrackedHref(baseHref: string) {
  if (typeof window === "undefined") return baseHref
  if (baseHref.startsWith("#")) return baseHref
  if (baseHref.startsWith("mailto:") || baseHref.startsWith("tel:")) return baseHref

  const attribution = getCurrentAttribution()
  const url = new URL(baseHref, window.location.origin)

  Object.entries(attribution).forEach(([key, value]) => {
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, value)
    }
  })

  if (baseHref.startsWith("http://") || baseHref.startsWith("https://")) {
    return url.toString()
  }

  return `${url.pathname}${url.search}${url.hash}`
}

export function getAttributionForPayload() {
  return getCurrentAttribution()
}

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return
  if (typeof window.va !== "function") return
  window.va("event", { name, ...payload })
}
