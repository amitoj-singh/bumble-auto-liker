# bumble-auto-liker
This script is designed to automate the process of swiping right on all potential matches on Bumble.

## Usage

1. Login to your bumble account on your computer (preferably chrome browser).
2. Open dev tools by pressing F12 key or Ctrl + Shift + I and go to _Sources_ tab, then click on _overrides_ tab.
3. Click on _Select folder for overrides_, it will open file explorer, create a folder and name it "overrides", Clik _Select Folder_. It will prompt for permission, click _Allow_.
4. Go back to _page_ tab. go to the file: top/eu1.bumbcdn.com/i/aco/bumble.com/v2/-/moxie/dist/vendor.02753106c1c46d84c250.js, right click it and select _override content_.
5. Format the file by clicking _{ }_ icon. Ctrl + F to search "e.isTrusted". It should be found on line number 3168.
6. Replace that line with "return true;". Save the file and reload the page.
7. Go to console tab paste the contents of [bumbleAutoLiker.js](https://github.com/amitoj-singh/bumble-auto-liker/blob/main/bumbleAutoLiker.js) and hit enter.
9. Reload your page to stop the script.

## Important Note

As the Bumble UI keeps changing from time to time, it is possible that this script may encounter issues or may not work as expected due to updates made by Tinder.

If you encounter any issues or face difficulties while executing this script, please don't hesitate to raise an issue in this repository. We are committed to maintaining and improving the script to ensure its functionality with the latest Tinder UI changes. Your feedback and bug reports are highly valuable to us.

We will make every effort to address reported issues and update the script promptly. Thank you for your understanding and cooperation.

Feel free to [open an issue](https://github.com/amitoj-singh/bumble-auto-liker/issues) if you encounter any problems.


## Disclaimer

Please use this script responsibly and in compliance with Bumble's terms of service. Automation tools can potentially violate Tinder's policies. The authors and contributors of this script are not responsible for any misuse or consequences resulting from the use of this software.

## License

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing

Contributions and feature requests are welcome! If you'd like to contribute to this project, please follow instructions on [contributing](contributing.md).
