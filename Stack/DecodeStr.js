let s="2[abc]3[cd]ef";
/*🧩 Real-Life Story: “The Gift-Packing Robot”
🏭 Setting:

You work in a toy factory, where robots pack boxes according to encoded instructions written by engineers.
But the engineers are lazy — instead of writing everything out, they use short codes to save time.

📜 Example Instruction:
3[a2[c]]

The robot must decode this to know what to pack.
🤖 How the robot reads it

The number before [ means how many times to repeat the pattern.
The content inside the brackets [...] tells what to pack.
If there’s another bracket inside, that means there’s a sub-instruction (nested task).

🪜 Step-by-Step Story

The robot reads "3[a2[c]]".
→ It first sees "a2[c]".
That means: put 1 “a” and 2 “c”s → “acc”.
So, the robot replaces that inner box with its real content: "3[acc]".
Now it reads "3[acc]".
→ That means pack 3 boxes of "acc":
"accaccacc"

✅ Final unpacked instruction: "accaccacc"*/