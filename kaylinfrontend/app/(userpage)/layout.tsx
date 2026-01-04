import ThinBar from "../../../sonyfrontend/components/thin-bar/page";

const UserPageLayout = ({ children }) => {
  return (
    <div>
      <div className=" flex h-screen bg-black">
        <ThinBar />

        {children}
      </div>
    </div>
  );
};

export default UserPageLayout;
