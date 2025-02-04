"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ResponseAI from "@/components/response-ai";
import { Skeleton } from "@/components/ui/skeleton";


export type AIResponse = {
  saran: string;
  penjelasan: string;
  langkah_selanjutnya: string[];
};

export default function Home() {
  const FormSchema = z.object({
    prompt: z
      .string({
        required_error: "Pertanyaan harus diisi",
      })
      .toLowerCase(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<AIResponse | null>(null);

  async function onSubmit(payload: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      setResponseData(responseData.response as AIResponse);

      toast({
        title: "AI Response:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(responseData.response, null, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20">
        <div className="w-full max-w-md mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">
                      Mau Saran Apa Nih?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tanyakan disini"
                        {...field}
                        className="min-h-[120px] text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Tanya"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-full max-w-3xl mt-12">
          {isLoading ? (
            <Skeleton className="w-full h-[300px]" />
          ) : (
            <ResponseAI responseData={responseData} />
          )}
        </div>
      </main>
    </div>
  );
}
