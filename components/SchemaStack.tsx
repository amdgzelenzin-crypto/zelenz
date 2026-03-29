'use client'

interface SchemaProps {
  data: any
}

export default function SchemaStack({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
