<template>
    <pre class="prettyprint"><code>{{ code }}</code></pre>
</template>

<script>
    import 'code-prettify'
    import 'code-prettify/loader/lang-css'

    export default {
        name: 'pretty-code',
        props: ['code'],
        mounted() {
    		PR.prettyPrint()
    	},
    }
</script>

<style lang="scss">
    @import '~loop/variables';
    @import '~prettify/src/prettify.css';

    pre.prettyprint {
        padding: 1.4rem 2rem;
        font-weight: 700;
        border: none;
        background-color: $code-bgcolor;

        .tag,
        .atn,
        .pun { color: darken($color-primary, 10%) }
        .atv { color: $code-highlight-color }
        .pln {
            color: $code-color;
            font-weight: 400;
        }
        .com {
            color: #a9a9a9;
            font-style: italic;
        }

        &.language-css {
            .str { color: darken($color-primary, 10%) }
            .pun,
            .pun + .pln,
            .kwd { color: #4198e2 }
            .pun + .pln {
                font-weight: 700;
            }
            .lit { color: $code-highlight-color }
        }
    }
</style>
