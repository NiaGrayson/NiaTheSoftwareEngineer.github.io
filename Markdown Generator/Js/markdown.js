window.marked = {
    parse(markdown) {

        return markdown
            .replace(
                /```([\s\S]*?)```/g,
                "<pre><code>$1</code></pre>"
            )

            .replace(/^### (.*)$/gm, "<h3>$1</h3>")
            .replace(/^## (.*)$/gm, "<h2>$2</h2>")
            .replace(/^# (.*)$/gm, "<h1>$1</h1>")

            .replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
            )

            .replace(
                /\*(.*?)\*/g,
                "<em>$1</em>"
            )

            .replace(
                /^> (.*)$/gm,
                "<blockquote>$1</blockquote>"
            )

            .replace(
                /^- (.*)$/gm,
                "<li>$1</li>"
            )

            .replace(
                /\n/g,
                "<br>"
            );
    }
};