const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="flex flex-row justify-center items-center mt-24">
        {children}
      </div>
     );
  }
   
  export default AuthLayout;
