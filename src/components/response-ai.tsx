import { AIResponse } from "@/app/financial-advice/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type ResponseAIProps = {
  responseData: AIResponse | null;
};

const ResponseAI: React.FC<ResponseAIProps> = ({ responseData }) => {
  if (!responseData) {
    return null;
  }
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          {responseData?.saran ?? 'Saran'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-6 text-muted-foreground">
          {responseData?.penjelasan ?? ''}
        </p>
        {responseData?.langkah_selanjutnya && (
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground">
              Langkah Selanjutnya:
            </h3>
            <ScrollArea className="h-[200px] pr-4">
              <ol className="list-decimal list-inside space-y-2">
                {responseData.langkah_selanjutnya.map((step, index) => (
                  <li key={index} className="text-secondary-foreground">
                    {step}
                  </li>
                ))}
              </ol>
            </ScrollArea>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ResponseAI;
