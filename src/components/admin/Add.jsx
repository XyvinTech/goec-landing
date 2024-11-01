import { Button } from "@/ui/admin/Button";
import { Checkbox } from "@/ui/admin/Checkbox";
import ComboBox from "@/ui/admin/ComboBox";
import ImageDropzone from "@/ui/admin/ImageDropZone";
import { Input } from "@/ui/admin/Input";
import RatingComponent from "@/ui/admin/RatingComponent";
import { Switch } from "@/ui/admin/Switch";
import { Textarea } from "@/ui/admin/TextArea";
import React, { useState } from "react";
import ChargerForm from "./ChargerForm";
import MultiSelectComponent from "./MultiselectComponent";

const AddStationForm = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const items = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];
  const [chargers] = useState([
    { id: 1, name: "Charger A", location: "Location 1", status: "Available" },
    { id: 2, name: "Charger B", location: "Location 2", status: "Occupied" },
    { id: 3, name: "Charger C", location: "Location 3", status: "Maintenance" },
  ]);
  return (
    <div className="relative w-full overflow-auto">
      {/* {apiStatus === 'loading' && <p>Loading...</p>} */}
      <form>
        <div className="bg-white px-7 py-5 rounded-md shadow-sm">
          <p className="font-semibold text-base text-[#202223] mb-5">Media</p>

          <ImageDropzone />
        </div>
        <div className="bg-white px-7 py-5 rounded-md shadow-sm">
          <p className="font-semibold text-base text-[#202223] mb-5">
            Cover Image
          </p>

          <ImageDropzone />
        </div>
        <div className="bg-white px-7 py-5 rounded-md shadow-sm mt-5">
          <p className="font-semibold text-base text-[#202223] mb-5">General</p>

          <div className="flex flex-col gap-5">
            <div>
              <label className="text-sm text-[#202223]">Station name</label>
              <Input placeholder="Enter station name" />
            </div>

            <div>
              <label className="text-sm text-[#202223]">Location</label>
              <Textarea
                className="resize-none"
                placeholder="Enter description"
              />
            </div>

            <div className=" flex justify-between gap-5">
              <div className="flex-1">
                <label className="text-sm text-[#202223]">Country</label>
                <Input placeholder="Enter coupon code" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm text-[#202223]">State</label>
                {/* select */}
                <ComboBox
                  placeholder="Choose City"
                  items={items}
                  value={selectedValue}
                  onChange={(value) => setSelectedValue(value)}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm text-[#202223]">City</label>
                <ComboBox
                  // disabled
                  placeholder="Choose City"
                  items={items}
                  value={selectedValue}
                  onChange={(value) => setSelectedValue(value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-20">
              <div className=" h-fit flex items-center gap-2">
                <label className="text-sm text-[#202223]">Goec only</label>
                <Switch />
              </div>
              <div className=" h-fit flex items-center gap-2">
                <label className="text-sm text-[#202223]">Rating</label>
                <RatingComponent maxRating={5} />
              </div>
            </div>
            <div className=" flex justify-between gap-5">
              <div className="flex-1">
                <label className="text-sm text-[#202223]">Longitude</label>
                <Input type="text" placeholder="Enter longitude" />
              </div>
              <div className="flex-1">
                <label className="text-sm text-[#202223]">Latitude</label>
                <Input typeof="text" type="text" placeholder="Enter latitude" />
              </div>

              <div className="flex-1">
                <label className="text-sm text-[#202223]">Map url</label>
                <Input type="url" placeholder="  enter your  map url" />
              </div>
            </div>

            <div className=" h-fit flex items-center gap-8">
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="restRoom" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="restRoom">
                  Rest room
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox className="border-[#C9CCCF]" />
                <label
                  id="restaurant"
                  className="text-sm text-[#202223]"
                  htmlFor="restaurant"
                >
                  Restaurant
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="hotel" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="hotel">
                  Hotel
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="cafe" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="cafe">
                  Cafe
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="mall" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="mall">
                  Mall
                </label>
              </div>
            </div>
          </div>
        </div>
        <ChargerForm
          chargers={chargers}
          // onChargerChange={handleChargerChange}
          // addCharger={addCharger}
        // setChargers={setChargers}
        />
        <p className="font-semibold text-base text-[#202223] my-8 ml-4">
          Nearby Stations
        </p>

        <div className="bg-white w-fit px-7 py-5 rounded-md shadow-sm mt-5">
          <p className="font-semibold text-base text-[#202223] mb-5">
            Select Stations
          </p>

          <MultiSelectComponent
            // options={
            //   Array.isArray(prevStations)
            //     ? prevStations.map((station) => ({
            //       value: station._id!,
            //       label: station.stationName,
            //     }))
            //     : []
            // }
            // onChange={
            //   handleNearByChange
            // }
            // value={selectedStations}
            placeholder='nearby stations'
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-red-500 text-red-500"
            type="button"
            // onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddStationForm;