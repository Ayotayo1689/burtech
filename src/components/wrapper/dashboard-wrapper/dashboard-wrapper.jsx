import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import DashboardNav from '../../dashboard-nav'
import { Container, Content, SubContent, Tab, Tabs } from './style'
import { GrHomeRounded } from 'react-icons/gr'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { BiStore } from 'react-icons/bi'

const DashboardWrapper = () => {
  const location = useLocation()
  return (
    <Container>
      <DashboardNav />
      {/* <Content>
        <Tabs>
          <Tab to="/dashboard" isActive={location.pathname === "/dashboard"}><GrHomeRounded /><span>Home</span></Tab>
          <Tab to="/dashboard/loans" isActive={location.pathname === "/dashboard/loans"}><RiMoneyDollarBoxLine /><span>Loans</span></Tab>
          <Tab to="/dashboard/store" isActive={location.pathname === "/dashboard/store"}><BiStore /><span>My Store</span></Tab>
        </Tabs>
      </Content> */}
        <SubContent>
          <Outlet />
        </SubContent>
    </Container>
  )
}

export default DashboardWrapper