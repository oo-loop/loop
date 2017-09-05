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
    @import '~loop/base/code';
    @import '~prettify/src/prettify.css';

    pre.prettyprint {
        font-weight: 700;

        border: none;
        background-color: $code-bgcolor;
        overflow: scroll;
        overflow-y: hidden;

        .tag,
        .atn,
        .pun { color: $color-primary }
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
            .str { color: $color-primary; }
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
