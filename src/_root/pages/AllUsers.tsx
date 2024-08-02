import { useToast } from "@/components/ui/use-toast";
import { Loader, UserCard } from "@/components/shared";
import { useGetUsers } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";

const AllUsers = () => {
  const { toast } = useToast();
  const { user } = useUserContext();
  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }
  let filteredUsers: any = [];
  if (creators?.documents != undefined) {
    filteredUsers = creators?.documents.filter((users: any) => {
      console.log("users", users);
      return users.$id != user.id;
    });
  }

  return (
    <div className="common-container">
      <div className="user-container dj-user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {filteredUsers.map((creator: any) => (
              <li key={creator?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
