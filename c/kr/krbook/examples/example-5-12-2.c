#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAXTOKEN 100

enum { NAME, PARENS, BRACKETS };

void dcl(void);
void dirdcl(void);

int gettoken(void);
int tokentype;
char token[MAXTOKEN];	/* type of last token */
char name[MAXTOKEN];	/* last token string */
char datatype[MAXTOKEN];	/* identifier name */
char out[1000];	/* data type = char, int, etc. */

main() /* convert declaration to words */
{
	while (gettoken() != EOF) {	/* 1st token on line */
		strcpy(datatype, token); /* is the datatype */
		out[0] = '\0';
		dcl();	/* parse rest of line */
		if (tokentype != '\n')
			printf("syntax error\n");
		printf("%s: %s %s\n", name, out, datatype);
	}
	return 0;
}