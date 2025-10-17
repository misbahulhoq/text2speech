import { useState } from "react";
import { Textarea } from "./components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const starterMessages = [
  "Hi there! Convert text to speech or speech to text — start typing or speaking.",
  "Ready when you are — type or speak to get started.",
  "Welcome! Say something or type your text to begin.",
  "Start speaking or typing to turn your voice into text or vice versa.",
  "Hey! Need text to speech or speech to text? Let’s begin.",
];

function App() {
  // t2s - text to speech
  // s2t - speech to text
  const [mode, setMode] = useState<"t2s" | "s2t">("t2s");

  return (
    <main className="mx-auto px-5 min-h-screen flex justify-center items-center">
      <section className="content-wrapper">
        <div className="mb-8">
          <h2 className="text-xl text-center">
            {
              starterMessages[
                Math.floor(Math.random() * starterMessages.length)
              ]
            }
          </h2>
        </div>
        <div className="textarea-wrapper">
          <Textarea
            className="h-auto overflow-auto mb-3"
            placeholder={mode === "t2s" ? "Text to Speech" : "Speech to Text"}
          />
        </div>
        <div className="bottom-part-wrapper flex gap-3 justify-end items-center">
          <Select
            defaultValue="t2s"
            onValueChange={(e: "t2s" | "s2t") => {
              setMode(e);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mode</SelectLabel>
                <SelectItem value="t2s" defaultChecked>
                  Text to speech
                </SelectItem>
                <SelectItem value="s2p">Speech to text</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button>Convert</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
