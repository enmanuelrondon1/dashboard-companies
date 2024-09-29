import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataAccordionFaqs } from "./AccordionFaqs.data";

export const AccordionFaqs = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        {dataAccordionFaqs.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={question}>
            <AccordionTrigger >{question}</AccordionTrigger>
            <AccordionContent>
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
