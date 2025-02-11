import React, { useState } from 'react'
import { Table, Select, Typography } from 'antd'
import SEO from '../seo/SEO'

const { Title } = Typography
const { Option } = Select

const transactions = Array(15).fill({
  key: Math.random(),
  description: 'Simply Dummy Text of The Printin...',
  type: 'Quote',
  credits: -3,
  amount: '$512.00',
  date: '21-Jan-2025 16:38',
})

const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Credits',
    dataIndex: 'credits',
    key: 'credits',
  },
  {
    title: 'Amounts',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
]

const TransactionHistory = () => {
  const [filter, setFilter] = useState('All')
  const [timeFilter, setTimeFilter] = useState('Last 3 Month')

  return (
    <>
      <SEO
        title="Transaction History"
        description="View your transaction history on Procure."
        keywords="Procure, transaction history, quotes, invoices"
      />
      <div className="p-4 w-full max-w-6xl mx-auto">
        <Title level={3}>Transaction History</Title>

        <div className="flex justify-end gap-4 mb-4">
          <Select value={filter} onChange={setFilter} className="w-40">
            <Option value="All">All</Option>
            <Option value="Quotes">Quotes</Option>
            <Option value="Invoices">Invoices</Option>
          </Select>

          <Select value={timeFilter} onChange={setTimeFilter} className="w-40">
            <Option value="Last 3 Month">Last 3 Month</Option>
            <Option value="Last 6 Month">Last 6 Month</Option>
            <Option value="Last Year">Last Year</Option>
          </Select>
        </div>

        <Table
          columns={columns}
          dataSource={transactions}
          bordered
          scroll={{ x: 400 }}
        />
      </div>
    </>
  )
}

export default TransactionHistory
