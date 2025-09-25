import { NextResponse } from 'next/server'
import workersData from '../../../../workers.json'

export async function GET() {
  try {
    return NextResponse.json(workersData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60'
      }
    })
  } catch (error) {
    console.error('Failed to fetch workers:', error)
    return NextResponse.json({ message: 'Failed to fetch workers' }, { status: 500 })
  }
}
