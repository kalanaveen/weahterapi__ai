"use client";
import Citypicker from "@/components/Citypicker";
import { Card ,Divider,Subtitle,Text} from "@tremor/react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-10 bg-gradient-to-br from-sky-400 to-indigo-900">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">
          Wheather API
        </Text>
        <Subtitle className="text-xl text-center">Powered By Open API</Subtitle>
        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-sky-400 to-indigo-900">
          <Citypicker/>
        </Card>
          </Card>
    </main>
  )
}
