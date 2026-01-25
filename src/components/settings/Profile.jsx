import SettingSection from "./SettingSection";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6 gap-4">
        <img
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="photo de profile"
          className="rounded-full h-10 object-cover flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-gray-100 truncate">
            John Doe
          </h3>
          <p className="text-gray-400 truncate">john.doe@exemple.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Editer Profile
      </button>
    </SettingSection>
  );
};

export default Profile;
