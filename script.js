function tabliczkamnozenia() {
    document.write("<table border=\"1\">");

    for (i=1; i<=10; i++)
    {
        document.write("<tr><td>" + i + "</td>");
        for (j=1; j<=10; j++)
        {
            if (j != 1) {
                document.write("<td>" + i * j + "</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("</table>");
}