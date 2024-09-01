import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {

    const { user } = useUser();

    return(
            <ScrollView className="px-5 bg-neutral-100">
            <Text className="text-2xl font-JakartaBold mt-20">Your Profile</Text>
            <SafeAreaView className="flex flex-col items-center justify-center">
                <View className="w-40 h-40 bg-white rounded-full mt-[-40px]">
                    <Image 
                        source={{ uri : user?.imageUrl }}
                        className="w-[150px] h-[150px] rounded-full mx-auto my-auto"
                        resizeMode="contain"
                    />
                </View>
                <View className="mt-10 mb-20 w-full h-70 bg-white rounded-xl relative">
                    <InputField 
                        label="First Name"
                        labelStyle="text-general-200 font-JakartaMedium mx-4"
                        containerStyle="mx-3"
                        inputStyle="text-md"
                        editable={false}
                    >
                        {user?.firstName}
                    </InputField>
                    <InputField 
                        label="Last Name"
                        labelStyle="text-general-200 font-JakartaMedium mx-4"
                        containerStyle="mx-3"
                        inputStyle="text-md"
                        editable={false}
                    >
                        {user?.lastName || 'Reddy'}
                    </InputField>
                    <InputField 
                        label="Email"
                        labelStyle="text-general-200 font-JakartaMedium mx-4"
                        containerStyle="mx-3"
                        inputStyle="text-md"
                        editable={false}
                    >
                        {user?.emailAddresses[0].emailAddress}
                    </InputField>
                    <InputField 
                        label="Email status"
                        labelStyle="text-general-200 font-JakartaMedium mx-4"
                        containerStyle="mx-3"
                        inputStyle={`text-md ${ user?.hasVerifiedEmailAddress ? 'text-green-500' : 'text-red-500' }`}
                        editable={false}
                    >
                        {user?.hasVerifiedEmailAddress ? 'Verified' : 'Not Verified'}
                    </InputField>
                    <InputField 
                        label="Phone Number"
                        labelStyle="text-general-200 font-JakartaMedium mx-4"
                        containerStyle="mx-3"
                        inputStyle="text-md"
                        editable={false}
                    >
                        {user?.primaryPhoneNumber?.phoneNumber || '+916281547906'}
                    </InputField>
                </View>
                </SafeAreaView>
            </ScrollView>
    )
}

export default Profile;