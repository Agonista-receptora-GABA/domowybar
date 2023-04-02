# domowybar

This page uses [Jekyll](https://jekyllrb.com/).

### Quick setup on your local machine
1. Clone this repo
1. Install the Jekyll's required components for your operating system: https://jekyllrb.com/docs/installation/
1. Run `bundle` to install project's dependencies
1. That's it. You can now write the blog using Jekyll
1. Use `bundle exec jekyll serve --force_polling` for the "live server":
   - the `bundle exec` in order to use the version of Jekyll from the Gemfile; see: https://jekyllrb.com/docs/step-by-step/01-setup/#installation
   - the `--force_polling` because the `--watch` option didn't work for me (Ubuntu WSL on Windows 10); I found this
     solution here: https://github.com/jekyll/jekyll/issues/2926#issuecomment-55558142

### Roadmap

TODO: Create a better build process than having a dist.
See: https://gist.github.com/cobyism/4730490
See: https://github.com/JamesIves/github-pages-deploy-action
