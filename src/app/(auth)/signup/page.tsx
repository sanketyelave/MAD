import SignupFormDemo from '@/app/components/signup'
import { getLoggedInUser } from '@/lib/server/users.actions';
import { redirect } from 'next/navigation';
import React from 'react'

const SignupPage = async () => {
  // const user = await getLoggedInUser();
  // if (user) redirect("/homepage")
  return (
    <>
    <SignupFormDemo/>
    </>
  )
}

export default SignupPage
