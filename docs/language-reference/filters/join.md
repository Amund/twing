`join`
======

{% raw %}

The `join` filter returns a string which is the concatenation of the items of a sequence:

````twig
{{ [1, 2, 3]|join }}
{# returns 123 #}
````

The separator between elements is an empty string per default, but you can define it with the optional first parameter:

````twig
{{ [1, 2, 3]|join('|') }}
{# outputs 1|2|3 #}
````

A second parameter can also be provided that will be the separator used between
the last two items of the sequence:

````twig
{{ [1, 2, 3]|join(', ', ' and ') }}
{# outputs 1, 2 and 3 #}
````  

Arguments
---------

* `glue`: The separator
* `and`: The separator for the last pair of input items

{% endraw %}

[back]({{ site.baseurl }}{% link language-reference/filters/index.md %})